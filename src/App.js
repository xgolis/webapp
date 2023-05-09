import { useState, useEffect } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddLink from '@mui/icons-material/AddLink';
import Android from '@mui/icons-material/Android';
import Key from '@mui/icons-material/Key';
import HelpIcon from '@mui/icons-material/Help';
import { Tooltip } from '@mui/material';


const App = () => {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [appName, setAppName] = useState("");
  const [gitToken, setGitToken] = useState("");
  var [logs, setLogs] = useState("Fill out fields to begin deployment");

  function CheckFields() {
    if (username === "") {
      setLogs("Fill out the username before the deployment start")
      return false
    }
    if (url === "") {
      setLogs("Fill out the URL before the deployment start")
      return false
    }
    if (appName === "") {
      setLogs("Fill out the application name before the deployment start")
      return false
    }
    if (gitToken === "") {
      setLogs("Fill out the git token before the deployment start")
      return false
    }
    setLogs("Username: " + username + "\nApplication name: " + appName + "\nGit URL repository: "+ url + "\nGit token: " + gitToken + "\n")
    return true
  }

  function goDeploy() {
    setLogs(" ")
    if (CheckFields() !== true) {
      return
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <a
            className="App-link"
            href="/"
            rel="noopener noreferrer"
          >
            Deploy your app
          </a>
          <a
            className="App-link"
            href="/Tutorial"
            rel="noopener noreferrer"
          >
            How to deploy
          </a>
        </div>
      </header>
      <div className='Content'>
        <div display='flex'>
          <div className='Urls'>
            <TextField  id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        onChange={e => {setUsername(e.target.value)}}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
            />
            <Tooltip title="Enter your username">
              <HelpIcon/>
            </Tooltip>
          </div>
          <div className='Urls'>
            <TextField  id="outlined-basic" label="Git Repository URL" variant="outlined" onChange={e => {setUrl(e.target.value)}}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AddLink />
                            </InputAdornment>
                          ),
                        }}
            />
            <Tooltip title="Enter the URL of your git repository with your application">
              <HelpIcon/>
            </Tooltip>
          </div>
          <div className='Urls'>
            <TextField  id="outlined-basic" label="App Name" variant="outlined" onChange={e => {setAppName(e.target.value)}}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Android />
                            </InputAdornment>
                          ),
                        }}
            />
            <Tooltip title="Enter the name of your application">
              <HelpIcon/>
            </Tooltip>
          </div>
          <div className='Urls'>
            <TextField id="outlined-basic" label="Git Token" variant="outlined" onChange={e => {setGitToken(e.target.value)}}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Key />
                            </InputAdornment>
                          ),
                        }}
            />
            <Tooltip title="Enter the git token for your git account e.g. ghp_tEsTctOdGh1DKEBxD2lHy2Rj6S3eo4eQQll">
              <HelpIcon/>
            </Tooltip>
          </div>
          <Button variant="contained" color="success" onClick={e => goDeploy()}>
            Deploy
          </Button>
        </div>
        <div className='Logs'>
            {logs}
        </div>
      </div>
      <footer className='Footer'>
        <b>Bachelor project of Golis Tomáš/xgolis@stuba.sk</b>
      </footer>
    </div>
  );
}

export default App;
