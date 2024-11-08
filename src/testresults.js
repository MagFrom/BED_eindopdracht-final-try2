[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/index.js`
(node:19888) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Server is listening on port 3000
info: POST /login. Status: 200. Duration: 6 ms {"service":"bookstore-api"}
info: GET /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: PUT /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
Received request to delete user with ID: e5678901-23f0-1234-5678-9abcdef01234
deleteUser: Function called with id: e5678901-23f0-1234-5678-9abcdef01234
Attempting to delete user with id: e5678901-23f0-1234-5678-9abcdef01234
info: DELETE /users/e5678901-23f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
Delete result: { count: 1 }
deleteUser result: e5678901-23f0-1234-5678-9abcdef01234
User with id e5678901-23f0-1234-5678-9abcdef01234 successfully deleted
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: GET /users. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /users. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: GET /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: PUT /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
Route handler: Received request to delete host with ID: e2345678-90bc-def0-0123-456789abcdef
try statement router delete HOST e2345678-90bc-def0-0123-456789abcdef
Attempting to delete host with id: e2345678-90bc-def0-0123-456789abcdef
info: DELETE /hosts/e2345678-90bc-def0-0123-456789abcdef. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
200 statement router delete HOST e2345678-90bc-def0-0123-456789abcdef
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: GET /hosts. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
we komen in de router post!!
info: POST /hosts. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
newHost in hosts.js: {
  id: '3606b0f0-9b15-44cd-a11b-b9b89c8cea71',
  username: 'newhosty ',
  password: 'password123',
  name: 'John Doe',
  email: 'johndoe@email.com',
  phoneNumber: '+11234567890',
  profilePicture: 'https://example.com/images/johndoe.jpg',
  aboutMe: "I'm a passionate traveler who loves to share my home with fellow explorers. Welcome!"
}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: GET /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: PUT /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: DELETE /properties/i1234567-89f0-1234-5678-9abcdef01234. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: GET /properties. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /properties. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: GET /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: PUT /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: DELETE /amenities/u3456789-01rs-tuvw-01cd-ef0123456789. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: GET /amenities. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /amenities. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: GET /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: PUT /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: DELETE /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: GET /bookings. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /bookings. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: GET /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: PUT /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: DELETE /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: GET /reviews. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /reviews. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: GET /users/:userId. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: PUT /users/d4567890-12. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
Received request to delete user with ID: d4567890-12ef-01
deleteUser: Function called with id: d4567890-12ef-01
Attempting to delete user with id: d4567890-12ef-01
info: DELETE /users/d4567890-12ef-01. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
Delete result: { count: 0 }
deleteUser result: null
User with id d4567890-12ef-01 not found
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /users. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: GET /hosts/:hostId. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: PUT /hosts/:hostId. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
Route handler: Received request to delete host with ID: :hostId
try statement router delete HOST :hostId
Attempting to delete host with id: :hostId
info: DELETE /hosts/:hostId. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
Host with id :hostId does not exist.
404 statement router delete HOST null
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
we komen in de router post!!
info: POST /hosts. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
newHost in hosts.js: null
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: GET /properties/h0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: PUT /properties/h0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: DELETE /properties/h0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /properties. Status: 200. Duration: 3 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: GET /amenities/t2345678-90qr-stu. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: PUT /amenities/t2345678-90qr-st. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: DELETE /amenities/bc-def012345678. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /amenities. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: GET /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: PUT /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: DELETE /bookings/f0123456-78ab-cdef-0123-456789abcdef. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /bookings. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: GET /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: PUT /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 0 ms {"service":"bookstore-api"}
info: DELETE /reviews/j0123456-78f0-1234-5678-9abcdef01234. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /reviews. Status: 200. Duration: 1 ms {"service":"bookstore-api"}
info: POST /login. Status: 200. Duration: 2 ms {"service":"bookstore-api"}
info: POST /login. Status: 401. Duration: 0 ms {"service":"bookstore-api"}
