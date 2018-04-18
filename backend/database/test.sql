PRAGMA foreign_keys = ON;

create table applicants (
      id              integer primary key,
      fullname         string not null,
      email           string not null,
      city            string not null,
      tel             integer not null,
      status          boolean DEFAULT false not null,
      country         string not null,
      experience      string not null,
      itAccess         string not null,
      hearAbout       string not null     
);

create table steps (
    id                integer primary key,
    applicant_id      integer,
    step_number       integer not null,
    status            string not null,
    url               string default null,
    foreign key (applicant_id) references applicants(id)
);

insert into applicants 
  (fullname, email, city, tel, status, country, experience, itAccess, hearAbout)
  values 
  ('Arielle Corwin', 'email@email.com', 'London', '07463823311', 1 , 'Sudan', 'Beginner', 'yes', 'facebook');
 

