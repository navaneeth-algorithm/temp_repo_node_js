### **/api/shoptypes**
* ### **Method**:GET

* ### **success response**
    * **Statuts:HTTP 200 OK**
   * ```
        {success:true,data:'dictionary of data in array'}
       ```
* ### **error Response**
    * **Status:HTTP 500 Internal Server Error**
    * ```json
        {success:false,data:response}
      ```
### **/api/shoptypes**
* ### **Method**:POST
    * ### **Request body**
    * ```json
      {typename:"category name"}
      ```
* ### **success response**
    * **Statuts:HTTP 200 OK**
   * ```json
        {success:true,typename:typename,shoptypeid:"created shop type id"}
       ```
* ### **error Response**
    * **Status:HTTP 500 Internal Server Error**
    * ```json
        {success:false,msg:'error msg here'}
      ```
### **/api/shoptypes/:id**
* ### **Method**:GET

* ### **success response**
    * **Statuts:HTTP 200 OK**
   * ```json
        {success:true,data:'shop  type data' }
       ```
* ### **error Response**
    * **Status:HTTP 500 Internal Server Error**
    * ```json
        {success:false,msg:'error msg here'}
      ```
### **/api/shoptypes/:id**
* ### **Method**:PUT
    * ### **Request body**
    * ```json
      {typename:"name of type "}
      ```
* ### **success response**
    * **Statuts:HTTP 200 OK**
   * ```json
        {success:true,msg:'typename of id is updated to given type name'}
       ```
* ### **error Response**
    * **Status:HTTP 500 Internal Server Error**
    * ```json
        {success:false,msg:'Incorrect parameter passed'}
        {success:false,msg:'error'}
      ```
### **/api/shoptypes/:id**
* ### **Method**:DELETE

* ### **success response**
    * **Statuts:HTTP 200 OK**
   * ```json
        {success:true,msg:'type name is deleted'}
       ```
* ### **error Response**
    * **Status:HTTP 500 Internal Server Error**
    * ```json
        {success:false,msg:'error'}
      ```
