import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Mui() {
  const [text, setText] = useState<string>("");
  const [title, setTitle] = useState<string>("first title");

  const handleInputChange = (event: any): void => {
    setText(event.target.value);
  };

  const handleTitle = (): void => {
    setTitle(text);
  };

  return (
    <>
      <h1>{title}</h1>
      <Button variant="outlined" onClick={handleTitle}>
        Apply a new title
      </Button>
      <TextField
        label="enter a new title"
        variant="standard"
        sx={{
          input: {color: 'red'},
          backgroundColor: 'orange'
          }}
          color="error"
        value={text}
        onChange={handleInputChange}
      />
        <Checkbox
          color="primary"
        />
        <label>Checkbox</label>
        <RadioGroup
          name="radioGroup"
        >
          <FormControlLabel
            value="option1"
            control={<Radio color="primary" />}
            label="אפשרות 1"
          />
          <FormControlLabel
            value="option2"
            control={<Radio color="primary" />}
            label="אפשרות 2"
          />
        </RadioGroup>
        <Select
          label="בחר אופציה"
        >
          <MenuItem value="">
            <em>אנא בחר</em>
          </MenuItem>
          <MenuItem value="optionA">אופציה א</MenuItem>
          <MenuItem value="optionB">אופציה ב</MenuItem>
          <MenuItem value="optionC">אופציה ג</MenuItem>
        </Select>
    </>
  );
}
