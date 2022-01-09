### **/api/shoptypes**
* ### **Method**:GET

* ### **success response**
    * **Statuts:HTTP 200 OK**
   * ```javascript
        {success:true,data:'dictionary of data in array'}
       ```
* ### **error Response**
    * **Status:HTTP 500 Internal Server Error**
    * ```javascript
        {success:false,data:response}
      ```
### **/api/shoptypes**
* ### **Method**:POST
    * ### **Request body**
    * ```javascript
      {typename:"category name"}
      ```
* ### **success response**
    * **Statuts:HTTP 200 OK**
   * ```javascript
        {success:true,typename:typename,shoptypeid:"created shop type id"}
       ```
* ### **error Response**
    * **Status:HTTP 500 Internal Server Error**
    * ```javascript
        {success:false,msg:'error msg here'}
      ```
### **/api/shoptypes/:id**
* ### **Method**:GET

* ### **success response**
    * **Statuts:HTTP 200 OK**
   * ```javascript
        {success:true,data:'shop  type data' }
       ```
* ### **error Response**
    * **Status:HTTP 500 Internal Server Error**
    * ```javascript
        {success:false,msg:'error msg here'}
      ```
### **/api/shoptypes/:id**
* ### **Method**:PUT
    * ### **Request body**
    * ```javascript
      {typename:"name of type "}
      ```
* ### **success response**
    * **Statuts:HTTP 200 OK**
   * ```javascript
        {success:true,msg:'typename of id is updated to given type name'}
       ```
* ### **error Response**
    * **Status:HTTP 500 Internal Server Error**
    * ```javascript
        {success:false,msg:'Incorrect parameter passed'}
        {success:false,msg:'error'}
      ```
### **/api/shoptypes/:id**
* ### **Method**:DELETE

* ### **success response**
    * **Statuts:HTTP 200 OK**
   * ```javascript
        {success:true,msg:'type name is deleted'}
       ```
* ### **error Response**
    * **Status:HTTP 500 Internal Server Error**
    * ```javascript
        {success:false,msg:'error'}
      ```
