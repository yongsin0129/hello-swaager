const swaggerAutogen = require('swagger-autogen')() // 可用 require('swagger-autogen')(options)

// const options = {
//     openapi: <string>,          // Enable/Disable OpenAPI. By default is null
//     language: <string>,         // Change response language. By default is 'en-US'
//     disableLogs: <boolean>,     // Enable/Disable logs. By default is false
//     autoHeaders: <boolean>,     // Enable/Disable automatic headers capture. By default is true
//     autoQuery: <boolean>,       // Enable/Disable automatic query capture. By default is true
//     autoBody: <boolean>         // Enable/Disable automatic body capture. By default is true
// }

const doc = {
  info: {
    version: '1.0.1', // by default: "1.0.0"
    title: '永c - hello-swagger', // by default: "REST API"
    description: '我的第一支 swagger 學習' // by default: ""
  },
  host: 'localhost: 3000', // by default: "localhost:3000"
  basePath: '', // by default: "/"
  schemes: [], // by default: ['http']
  consumes: [], // by default: ['application/json']
  produces: [], // by default: ['application/json']
  tags: [
    // by default: empty Array
    {
      name: 'index', // Tag name
      description: 'index tag description' // Tag description
    },
    {
      name: 'users', // Tag name
      description: 'users tag description' // Tag description
    }
    // { ... }
  ],
  securityDefinitions: {}, // by default: empty object
  definitions: {
    Parents: {
      father: 'Simon Doe',
      mother: 'Marie Doe'
    },
    User: {
      name: 'doc definition : Jhon Doe',
      age: 29,
      parents: {
        $ref: '#/definitions/Parents'
      },
      diplomas: [
        {
          school: 'XYZ University',
          year: 2020,
          completed: true,
          internship: {
            hours: 290,
            location: 'XYZ Company'
          }
        }
      ]
    },
    AddUser: {
      $name: 'doc definition : Jhon Doe',
      $age: 29,
      about: ''
    } // by default: empty object
  },
  components: {
    examples: {
      User: {
        value: {
          name: 'doc example : Jhon Doe',
          age: 29
        },
        summary: 'Sample for User'
      }
    }
  }
}

const outputFile = './swagger_output.json' // 輸出的文件名稱
const endpointsFiles = ['./app.js'] // 要指向的 API，通常使用 Express 直接指向到 app.js 就可以
// const endpointsFiles = ['./routes/index.js', './routes/users.js'] // 也可以指定 routes

swaggerAutogen(outputFile, endpointsFiles, doc) // swaggerAutogen 的方法
