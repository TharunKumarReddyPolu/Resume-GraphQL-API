const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');

const resumeDetails = {
  name: 'Tharun Kumar Reddy Polu',
  email: 'tharunkumarreddy.polu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/polu-tharun-kumar-reddy/',
  github: 'https://github.com/TharunKumarReddyPolu',
  education: [
    { degree: 'M.Eng. in Computer Software Engineering', institution: 'University of Maryland, College Park', year: 'Jan 2023 - Dec 2024' },
    { degree: 'B.Tech. in Electronics & Communication Engineering', institution: 'Jawaharlal Nehru Technological University', year: 'Jun 2017 - July 2021' }
  ],
  experience: [
    { role: 'Software Engineering Intern', company: 'Develop for Good', year: 'May 2024 - Present' },
    { role: 'Graduate Research Assistant - II', company: 'University of Maryland, College Park', year: 'April 2023 - Present' },
    { role: 'Student Mentor', company: 'Topmate', year: 'Jul 2023 - Present'},
    { role: 'Software Engineering Prep Fellow', company: 'Major League Hacking', year: 'Mar 2023 - Apr 2023' },
    { role: 'Software Engineer (TCS Digital)', company: 'Tata Consultancy Services Ltd.', year: 'Jul 2021 - Dec 2022' },
    { role: 'Software Engineering Intern', company: 'Tech Mahindra', year: 'Mar 2021 - Jul 2021' }
  ],
  projects: [
    { name: '', description: '', skills: '' , year: ''},
    { name: '', description: '', skills: '' , year: ''},
    { name: '', description: '', skills: '' , year: ''},
    { name: '', description: '', skills: '' , year: ''},
    { name: '', description: '', skills: '' , year: ''},
    { name: '', description: '', skills: '' , year: ''},
  ],
  certifications: [
    { name: '', organization: '', credential: ''},
    { name: '', organization: '', credential: ''},
    { name: '', organization: '', credential: ''},
    { name: '', organization: '', credential: ''},
  ],
  testimonials: [
    { name: '', testimonial: ''},
    { name: '', testimonial: ''},
    { name: '', testimonial: ''},
    { name: '', testimonial: ''},
    { name: '', testimonial: ''}
  ]
};

// Define the types
const EducationType = new GraphQLObjectType({
  name: 'Education',
  fields: {
    degree: { type: GraphQLString },
    institution: { type: GraphQLString },
    year: { type: GraphQLString }
  }
});

const ExperienceType = new GraphQLObjectType({
  name: 'Experience',
  fields: {
    role: { type: GraphQLString },
    company: { type: GraphQLString },
    year: { type: GraphQLString }
  }
});

const ProjectsType = new GraphQLObjectType({
  name: 'Projects',
  fields: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    skills: { type: GraphQLString },
    year: { type: GraphQLString }
  }
});

const CertificationsType = new GraphQLObjectType({
  name: 'Certifications',
  fields: {
    name: { type: GraphQLString },
    organization: { type: GraphQLString },
    credential: { type: GraphQLString },
    year: { type: GraphQLString }
  }
});

const TestimonialsType = new GraphQLObjectType({
  name: 'Testimonials',
  fields: {
    name: { type: GraphQLString },
    testimonial: { type: GraphQLString }
  }
});


const ResumeType = new GraphQLObjectType({
  name: 'Resume',
  fields: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    linkedin: { type: GraphQLString },
    github: { type: GraphQLString },
    education: { type: new GraphQLList(EducationType) },
    experience: { type: new GraphQLList(ExperienceType) },
    projects: { type: new GraphQLList(ProjectsType) },
    certifications: { type: new GraphQLList(CertificationsType) },
    testimonials: { type: new GraphQLList(TestimonialsType) }
  }
});

// Define the query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    resume: {
      type: ResumeType,
      resolve(parent, args) {
        return resumeDetails;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
