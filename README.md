<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
Basic Ecommerce CRUD for jubelio BE-TEST

### Built With
This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* NodeJs
* Axios


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/SamOdras/jubelio-test-be
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### How to run in local

1. Follow the installation guide first

2. ( Postgree ) Buat DB dengan nama Schemas db_test_jubelio

3. ( Postgree ) Buat table dengan command yang ada di "sql_init_table.sql"

4. ( Postgree ) Isi table dengan data dari command yang ada di "sql_init_data.sql"

5. Buat file .env, lalu isikan sesuai dengan konfigurasi database masing2

2. Run Npm
   ```sh
   npm start
   ```

### How to test in local

1. Follow the installation guide first

2. Run Npm
   ```sh
   npm test
   ```