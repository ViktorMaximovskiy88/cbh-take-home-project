# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

original database design
	Facility Table	
	id, name, position, comment
	
	Agent Table	
	id, name, dob, sex, address, ... and so on
	
	Shift Table	
	id, fid(Facility id), aid(agent id), start_time, end_time,... and so on


Updated database design
	Facility Table	
	id, name, position, comment
	
	Agent Table	
	id, customer_id, name, dob, sex, address, ... and so on
	
	Shift Table	
	id, fid(Facility id), cid(customer_id), start_time, end_time,... and so on
	
Ticket 1: Add custom_id field to the Agents table and Update Agent Form
	Acceptance Criteria:
	In the database, a new "custom_id" field is added to the Agents table.
	Agent Form allows you to change the custom_id field.
	In Facility, agents can be found by searching by customer_id.
	Each Agent has a unique custom_id field.
	In the user interface, the custom_id field appears alongside the Agent's name and internal database id.
	When generating reports, the custom_id can be used instead of the internal database id.
	
	Time/Effort Estimate:

	Database schema update: 30min-1hours
	UI update: 1-2 hours
	Testing: 1-2 hours
	
	Implementation Details:

	In the Agents table of the database, create a new column called "custom_id" with a unique constraint.
	Update the UI to include a custom_id input field in the Agents form and to display the custom_id in the Agents list.


Ticket2 : Change the Shifts table to use a custom id instead of the internal database id and 
		add a custom_id field to the Shifts metadata shown in the getShiftsByFacility function.
	Acceptance Criteria:
	The Shifts table is updated to store the Agent's custom_id rather than their internal database id.
	The getShiftsByFacility function has been updated to retrieve the Agent's custom_id rather than their internal database id.
	When creating reports, the generateReport function is updated to use the Agent's custom_id rather than their internal database id.
	The metadata returned by getShiftsByFacility includes the Agent's custom_id as well as their internal database id.
	Time/Effort Estimate:

	Database schema update: 2-3 hours
	Function update: 2-3 hours
	Testing: 1-2 hours
	
	Implementation Details:
	In the database, create a new column called "custom_id" in the Shifts table.
	Change the getShiftsByFacility function to retrieve the Agent's custom_id rather than their internal database id.
	When creating reports, modify the generateReport function to use the Agent's custom_id rather than their internal database id.
	Update the getShiftsByFacility function to include the Agent's custom_id in the returned metadata.

Ticket3: When generating reports, update the UI to allow Facilities to search by custom_id.
	Acceptance Criteria:

	The UI includes a search field where Facilities can look for Agents based on their custom_id.
	The search function returns Shifts worked by Agents with the custom_id entered.

	Time/Effort Estimate:

	UI update: 2-4 hours
	Function update: 1-2 hours
	Testing: 1-2 hours
	Implementation Details:

	In the report generation UI, add a search field that searches for Agents by custom_id.
	Add the custom_id to the search criteria in the function that retrieves Shifts for a Facility.

Ticket4 : Changes should be reflected in the documentation.
	Acceptance Criteria:

	Documentation is updated to reflect the addition of the custom_id field in the Agents table, the Shifts table, and the Shifts metadata.
	Documentation is updated to reflect the ability of Facilities to search for Agents by custom_id when generating reports.
	Time/Effort Estimate:

	Documentation update: 2-4 hours
	Implementation Details:

	Update the relevant documentation sections to reflect the changes.
