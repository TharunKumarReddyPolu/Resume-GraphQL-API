# Resume-GraphQL-API
This repository contains a GraphQL API designed to manage and query resume data efficiently. Built with Node.js and Express, the API allows users to query on various resume components such as personal information, education, work experience, skills, and projects.

## Steps to test the GraphQL API
1. Navigate to the URL: [https://tharun-resume-graphql-api.vercel.app/api/graphql](https://tharun-resume-graphql-api.vercel.app/api/graphql)
2. Copy and paste the below API Query in the GraphQL Editor:
```
  query {
  resume {
    name
    email
    linkedin
    github
    education {
      degree
      institution
      year
    }
    experience {
      role
      company
      year
    }
    projects {
      name
      description
      skills
      year
    }
    certifications {
      name
      organization
      credential
      year
    }
    testimonials {
      name
      testimonial
    }
  }
}
```
3. Now, Click on Execute Query or `ctrl + Enter` to execute the query.
4. You should see my resume details as a API JSON response. Tweak above query to get only specific sections of my portfolio.

### Thanks for Visiting here! :)