# Running the Project Locally

cd into the frontend directory

If you encounter an error related to OpenSSL (e.g., ERR_OSSL_EVP_UNSUPPORTED), you need to set the OpenSSL legacy provider to enable certain cryptographic algorithms.

Set the environment variable by running:

`export NODE_OPTIONS=--openssl-legacy-provider`

Start the Development Server:
Once the dependencies are installed, you can start the development server using the following command:

`npm start`
The server will start, and you should be able to view the project in your browser at http://localhost:3000.

# format code with prettier 

npx prettier --write .


