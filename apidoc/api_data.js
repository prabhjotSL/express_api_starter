define({ "api": [  {    "type": "post",    "url": "/admins",    "title": "Create New Admin",    "name": "CreateNewAdmin",    "group": "Admins",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "email",            "description": "<p>Email of the Admin.</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "password",            "description": "<p>Password of the Admin.</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "name",            "description": "<p>Name of the Admin.</p> "          },          {            "group": "Parameter",            "type": "<p>Number</p> ",            "optional": false,            "field": "age",            "description": "<p>Name of the Age.</p> "          }        ]      },      "examples": [        {          "title": "Request-Example:",          "content": "{\n  \"email\"   : \"tangent@gmail.com\",\n  \"password\": \"qwerty\",\n  \"name\"    : \"Dr. Tangent\",\n  \"age\"     : \"32\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "_id",            "description": "<p>Id of the Admin.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "email",            "description": "<p>Email of the Admin.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "name",            "description": "<p>Name of the Admin.</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "age",            "description": "<p>Age of the Admin.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "__v",            "description": "<p>Version of the Document (Auto Generated).</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\"  : \"56b86af87365ac25146b2bc5\",\n  \"email\": \"tangent@gmail.com\",\n  \"name\" : \"Dr. Tangent\",\n  \"age\"  : 32,\n  \"__v\"  : 0\n}]",          "type": "Object[]"        }      ]    },    "version": "0.0.0",    "filename": "controllers/admin.js",    "groupTitle": "Admins",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "InternalServerError",            "description": "<p>Something Failed Internally, Please check the error object.</p> "          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 Internal Server Error\n {\n  \"message\": \"Internal Server Error\",\n  \"error\"  : {}\n}",          "type": "json"        }      ]    }  },  {    "type": "delete",    "url": "/admin/:id",    "title": "Delete Admin Information",    "name": "DeleteOneAdmin",    "group": "Admins",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "id",            "description": "<p>Admins unique ID.</p> "          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "message",            "description": "<p>Success Message</p> "          },          {            "group": "Success 200",            "type": "<p>Object</p> ",            "optional": false,            "field": "object",            "description": "<p>Deleted Object</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"message\" : \"Successfully deleted\",\n  \"object\"  : {\n     \"_id\": \"56b86af87365ac25146b2bc5\",\n     \"name\": \"Dr. Calculus\",\n     \"__v\": 0\n  }\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "controllers/admin.js",    "groupTitle": "Admins",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "AdminNotFound",            "description": "<p>The resource requested is not available.</p> "          },          {            "group": "Error 4xx",            "optional": false,            "field": "InternalServerError",            "description": "<p>Something Failed Internally, Please check the error object.</p> "          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"AdminsNotFound\"\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 Internal Server Error\n {\n  \"message\": \"Internal Server Error\",\n  \"error\"  : {}\n}",          "type": "json"        }      ]    }  },  {    "type": "get",    "url": "/admins",    "title": "Request All Admins",    "name": "GetAllAdmins",    "group": "Admins",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "_id",            "description": "<p>Id of the Admin.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "email",            "description": "<p>Email of the Admin.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "name",            "description": "<p>Name of the Admin.</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "age",            "description": "<p>Age of the Admin.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "__v",            "description": "<p>Version of the Document (Auto Generated).</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\"  : \"56b86af87365ac25146b2bc5\",\n  \"email\": \"calculus@gmail.com\",\n  \"name\" : \"Dr. Calculus\",\n  \"age\"  : 33,\n  \"__v\"  : 0\n}]",          "type": "Object[]"        }      ]    },    "version": "0.0.0",    "filename": "controllers/admin.js",    "groupTitle": "Admins",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "InternalServerError",            "description": "<p>Something Failed Internally, Please check the error object.</p> "          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 Internal Server Error\n {\n  \"message\": \"Internal Server Error\",\n  \"error\"  : {}\n}",          "type": "json"        }      ]    }  },  {    "type": "get",    "url": "/admin/:id",    "title": "Request One Admin Information",    "name": "GetOneAdmin",    "group": "Admins",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "id",            "description": "<p>Admins unique ID.</p> "          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "_id",            "description": "<p>Id of the new Admin Created.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "name",            "description": "<p>Name of the Doctor.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "__v",            "description": "<p>Version of the Document (Auto Generated).</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"_id\" : \"56b86af87365ac25146b2bc5\",\n  \"name\": \"Dr. Calculus\",\n  \"__v\" : 0\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "controllers/admin.js",    "groupTitle": "Admins",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "AdminNotFound",            "description": "<p>The resource requested is not available.</p> "          },          {            "group": "Error 4xx",            "optional": false,            "field": "InternalServerError",            "description": "<p>Something Failed Internally, Please check the error object.</p> "          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"AdminsNotFound\"\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 Internal Server Error\n {\n  \"message\": \"Internal Server Error\",\n  \"error\"  : {}\n}",          "type": "json"        }      ]    }  },  {    "type": "put",    "url": "/admin/:id",    "title": "Update Admin Information",    "name": "UpdateOneAdmin",    "group": "Admins",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "id",            "description": "<p>Admins unique ID, to be given as part of url.</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "name",            "description": "<p>Admin name value to be updated, to be given as part of JSON object.</p> "          }        ]      },      "examples": [        {          "title": "Request-Example:",          "content": "{\n  \"name\": \"Dr. Tangent\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "message",            "description": "<p>Success Message</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"message\" : \"Admin updated\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "controllers/admin.js",    "groupTitle": "Admins",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "AdminNotFound",            "description": "<p>The resource requested is not available.</p> "          },          {            "group": "Error 4xx",            "optional": false,            "field": "InternalServerError",            "description": "<p>Something Failed Internally, Please check the error object.</p> "          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"AdminsNotFound\"\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 Internal Server Error\n {\n  \"message\": \"Internal Server Error\",\n  \"error\"  : {}\n}",          "type": "json"        }      ]    }  },  {    "type": "post",    "url": "/users",    "title": "Create New User",    "name": "CreateNewUser",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "email",            "description": "<p>Email of the User.</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "password",            "description": "<p>Password of the User.</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "name",            "description": "<p>Name of the User.</p> "          },          {            "group": "Parameter",            "type": "<p>Number</p> ",            "optional": false,            "field": "age",            "description": "<p>Name of the Age.</p> "          }        ]      },      "examples": [        {          "title": "Request-Example:",          "content": "{\n  \"email\"   : \"tangent@gmail.com\",\n  \"password\": \"qwerty\",\n  \"name\"    : \"Dr. Tangent\",\n  \"age\"     : \"32\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "_id",            "description": "<p>Id of the User.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "email",            "description": "<p>Email of the User.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "name",            "description": "<p>Name of the User.</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "age",            "description": "<p>Age of the User.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "__v",            "description": "<p>Version of the Document (Auto Generated).</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\"  : \"56b86af87365ac25146b2bc5\",\n  \"email\": \"tangent@gmail.com\",\n  \"name\" : \"Dr. Tangent\",\n  \"age\"  : 32,\n  \"__v\"  : 0\n}]",          "type": "Object[]"        }      ]    },    "version": "0.0.0",    "filename": "controllers/users.js",    "groupTitle": "Users",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "InternalServerError",            "description": "<p>Something Failed Internally, Please check the error object.</p> "          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 Internal Server Error\n {\n  \"message\": \"Internal Server Error\",\n  \"error\"  : {}\n}",          "type": "json"        }      ]    }  },  {    "type": "delete",    "url": "/user/:id",    "title": "Delete User Information",    "name": "DeleteOneUser",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "id",            "description": "<p>Users unique ID.</p> "          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "message",            "description": "<p>Success Message</p> "          },          {            "group": "Success 200",            "type": "<p>Object</p> ",            "optional": false,            "field": "object",            "description": "<p>Deleted Object</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"message\" : \"Successfully deleted\",\n  \"object\"  : {\n     \"_id\": \"56b86af87365ac25146b2bc5\",\n     \"name\": \"Dr. Calculus\",\n     \"__v\": 0\n  }\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "controllers/users.js",    "groupTitle": "Users",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The resource requested is not available.</p> "          },          {            "group": "Error 4xx",            "optional": false,            "field": "InternalServerError",            "description": "<p>Something Failed Internally, Please check the error object.</p> "          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UsersNotFound\"\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 Internal Server Error\n {\n  \"message\": \"Internal Server Error\",\n  \"error\"  : {}\n}",          "type": "json"        }      ]    }  },  {    "type": "get",    "url": "/users",    "title": "Request All Users",    "name": "GetAllUsers",    "group": "Users",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "_id",            "description": "<p>Id of the User.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "email",            "description": "<p>Email of the User.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "name",            "description": "<p>Name of the User.</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "age",            "description": "<p>Age of the User.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "__v",            "description": "<p>Version of the Document (Auto Generated).</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\"  : \"56b86af87365ac25146b2bc5\",\n  \"email\": \"calculus@gmail.com\",\n  \"name\" : \"Dr. Calculus\",\n  \"age\"  : 33,\n  \"__v\"  : 0\n}]",          "type": "Object[]"        }      ]    },    "version": "0.0.0",    "filename": "controllers/users.js",    "groupTitle": "Users",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "InternalServerError",            "description": "<p>Something Failed Internally, Please check the error object.</p> "          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 Internal Server Error\n {\n  \"message\": \"Internal Server Error\",\n  \"error\"  : {}\n}",          "type": "json"        }      ]    }  },  {    "type": "get",    "url": "/user/:id",    "title": "Request One User Information",    "name": "GetOneUser",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "id",            "description": "<p>Users unique ID.</p> "          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "_id",            "description": "<p>Id of the new User Created.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "name",            "description": "<p>Name of the Doctor.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "__v",            "description": "<p>Version of the Document (Auto Generated).</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"_id\" : \"56b86af87365ac25146b2bc5\",\n  \"name\": \"Dr. Calculus\",\n  \"__v\" : 0\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "controllers/users.js",    "groupTitle": "Users",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The resource requested is not available.</p> "          },          {            "group": "Error 4xx",            "optional": false,            "field": "InternalServerError",            "description": "<p>Something Failed Internally, Please check the error object.</p> "          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UsersNotFound\"\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 Internal Server Error\n {\n  \"message\": \"Internal Server Error\",\n  \"error\"  : {}\n}",          "type": "json"        }      ]    }  },  {    "type": "put",    "url": "/user/:id",    "title": "Update User Information",    "name": "UpdateOneUser",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "id",            "description": "<p>Users unique ID, to be given as part of url.</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "name",            "description": "<p>User name value to be updated, to be given as part of JSON object.</p> "          }        ]      },      "examples": [        {          "title": "Request-Example:",          "content": "{\n  \"name\": \"Dr. Tangent\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "message",            "description": "<p>Success Message</p> "          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"message\" : \"User updated\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "controllers/users.js",    "groupTitle": "Users",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>The resource requested is not available.</p> "          },          {            "group": "Error 4xx",            "optional": false,            "field": "InternalServerError",            "description": "<p>Something Failed Internally, Please check the error object.</p> "          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UsersNotFound\"\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 Internal Server Error\n {\n  \"message\": \"Internal Server Error\",\n  \"error\"  : {}\n}",          "type": "json"        }      ]    }  }] });