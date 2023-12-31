-- -- -- -- create DATABASE projectManagementSystem
-- -- -- -- alter database Project_Management MODIFY name  = projectManagementSystem
-- -- -- -- use projectManagementSystem
-- select * from Users


create TABLE Users (
    userID NVARCHAR(3000),
    userName VARCHAR(255) not null,
    email VARCHAR(255) not null UNIQUE,
    password VARCHAR(255) not null,
    AssignedProjectID INT, 
    phone_no VARCHAR (250) UNIQUE, 
    role varchar(20) DEFAULT 'employee',
    Welcomed bit DEFAULT 0,
       isAssigned bit DEFAULT 0
);
alter table Users
drop COLUMN AssignedProjectID

-- -- -- --  
-- -- -- drop table Users

--created the admin
-- update Users 
-- set role = 'admin'
-- where email = 'michealvenum007@gmail.com'

delete from Users 
where email = 'mikevenum9@gmail.com'