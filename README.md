# project-job-board



Job Board is an end-of-training project in which we are creating an application to help developers find React-related jobs in France.


## Technical Stack 

- [NodeJS] (https://nodejs.org/en/download/) (v12 or later)
- [PostgreSQL] (https://www.postgresql.org/download/) (v12 or later)
- [Sqitch] (https://sqitch.org/download/) (v1 or later)
- [React] (https://reactjs.org/versions) (v17 or later)
- [ReactRedux] (https://react-redux.js.org/) (v7 or later)

These tools are essential not only to install, but also to make the application work.
Please install before you continue.

## Installation

Clone the repository locally.

```bash
git clone https://github.com/O-clock-Sinbad/project-job-board.git
```
Then install npm dependencies in your local file.

```bash
npm install
```
Set up .env and sqitch.conf files by taking into account .example files within the present repository.

Also, create a PostgreSQL database and deploy the sqitch project on it.

```bash
createdb jobboard
sqitch deploy db:pg:jobboard
```
Configure PostgreSQL (or provide environnemental variables necessary) for `createdb` and `sqitch` commands to execute correctly.

Finally, 

```bash
```
Configure 

## Usage

```js
import foobar
# returns 'words'
foobar.pluralize('word')
# returns 'geese'
foobar.pluralize('goose')
# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
