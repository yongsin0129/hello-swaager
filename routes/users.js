var express = require('express')
var router = express.Router()

// endpoint 細部寫法 官方文件教學連結 https://github.com/davibaltar/swagger-autogen#endpoints

/*
    #swagger.parameters['parameterName'] 細項說明
    in: 'path', 'header', 'query', 'body', 'formData', etc. // by default is 'query'
    description: The parameter description
    required: true or false
    type: 'string', 'number', 'boolean', 'integer' or 'array'. // by default is 'string' when 'schema' is missing
    format: 'int64', etc.
    schema: See section < page : Schema and Definitions >
*/

/********************************************************************************
*
          GET
*
*********************************************************************************/
router.get('/', function (req, res, next) {
  // 沒有加 tags 標籤 , 在 swagger UI 上 就會列在 default 裡面
  // #swagger.tags = ['users']
  // #swagger.summary = 'Some get summary...'
  // #swagger.description = 'Some description...'
  // #swagger.operationId = 'Your_operationId_here'

  /*  #swagger.parameters['foo'] = {
                in: 'query',
                description: 'Some parameters query description...',
        } */

  /* #swagger.responses[200] = {
            description: '200 User successfully obtained',
            schema: {
                name: 'Jhon Doe',
                age: 29,
                about: ''
            }
    } */

  /* #swagger.responses[201] = {
                description: '201 User successfully obtained , schema ref to #/definitions/AddUser',
                schema: { $ref: '#/definitions/AddUser' }
        } */

  // #swagger.responses[500] = { description: 'Some description...' }

  res.send('respond with a get resource')
})

/********************************************************************************
*
          POST
*
*********************************************************************************/

router.post('/post', function (req, res, next) {
  // #swagger.tags = ['users']
  // #swagger.summary = 'Some post summary...'
  /*  #swagger.parameters[foo] = {
                in: 'body',
                description: 'Some body parameters description...',
                schema: { $ref: '#/definitions/AddUser' }
        } */

  res.send('respond with a post resource')
})

router.put('/put', function (req, res, next) {
  // #swagger.tags = ['users']

  res.send('respond with a put resource')
})

router.delete('/delete', function (req, res, next) {
  // #swagger.tags = ['users']

  res.send('respond with a delete resource')
})

module.exports = router
