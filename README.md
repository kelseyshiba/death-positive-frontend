## Death Positive React FrontEnd
This project was built as a project for Flat Iron School in September of 2020. The application is intended to be a starter application for users to be able to choose, plan, and think positively on their death or the death of a loved one. 

## Installation && Getting Started
After cloning the project, be sure to run

$ bundle OR bundle install

To include all dependencies

Open the front end 

$cd death-positive-frontend

Open the back end

$cd death-positive-backend

You can run the servers

Frontend Servier
$ rails s

Backend Servicer
$ npm start

## Development

In your terminal, run the commands:

$ rails db:setup
$ rails db:migrate

To seed the Database with some data, run:

$ rails db:seed


To pull up the interactive console(front end)

$ rails c OR rails console

Run Control + C to stop the either server at any time.

Once the server is running, you can visit the APIs at:

FIX DIS
localhost:3000/songs or /songs/id to view all or just one song
localhost:3000/setlists or setlists/id to view all or just one setlist
locatlhost:3000/setlist_songs or setlist_songs/id to view all of the join table or one entry

To view the front end visit:
localhost:3001 (or whatever your port # is)

## Built With
Ruby version 2.6.1p33
Bootstrap 4.5.0
Javascript ES6
Font Awesome for icons
React
Redux, Thunk


## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/kelseyshiba/death-positive. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the code of conduct.

## Code of Conduct
Everyone interacting in the Rails project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.

## License
[MIT](https://choosealicense.com/licenses/mit/)