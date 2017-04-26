# Truck Hunt

Geolocate nearby food trucks in San Francisco and place orders online.  Vendors are instantly notified when an order is placed and users get real time updates when their orders are ready. Customers no longer have to wait in line for food trucks, and vendors can harness untapped revenues.

## Team

  - Matt Schmitz
  - Benicio Pedido
  - Sam Zoll
  - Michael Burton

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

In order to use this repo please fork it to your own github account then clone it to your local machine.  Then cd into the corresonding folder, and add us as a remote upstream if you'd like to make contributions or submit a PR.

## Data

The data for this application comes from the SF Open Data organization at https://datasf.org/opendata/.  Here the City of San Francisco publically shares the permit status for all mobile food vendors throughout the city, along with their location data and scheduling information.  Utilizing this data set we were able to populate the location of each vendor throughout the city and filter that information based upon which truck is permitted and scheduled for the queried time.  Please note that this data is not dynamically updating and is current as on April 25th, 2017.

If you are interested in using this data can find the JSON objects from two large datasets within the database/data folder of this repo.  Once you have installed postgresql on your server or development environment you must seed the database by running the npm run seed script as found within the package.json file.  This will populate your local db and will allow trucks to properly rendor on the map.

## Stripe API

This application utilizes the Stripe API to allow payments for both vendors and customers.  For those interested in using this repo for their own project please register your app with Stripe to obtain your own keys, which you can store in your .env file.
## PostgreSQL

This application rely's upon having PostgreSQL installed locally on your machine. For OSX we recommend using brew for your installation needs.

If you want to install postgres locally:
brew tap homebrew/services
brew install postgres
brew services start postgresql
createdb { database name here }

Once you've created your db run "npm run start-dev" to create all the db tables, follow by "npm run seed" to populate your db with real truck data. The menu and review data is fake and should not be taken as an accurate depiction of real food trucks.

If you decide to modify the schema you must run "dropdb { database name here }" followed by the steps above.

## Requirements

- Node 6.4.x
- Express 4.x
- Webpack 2.x

## Development



### Installing Dependencies

From within the root directory:

```
npm install -g bower
npm install
```

### Roadmap

View the project roadmap [here](LINK_TO_DOC)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## License

MIT