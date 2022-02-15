import React, { useState } from 'react';
import {
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

// TODO: Validate Sheet ID / access before adding
// Show a check if it's good, or an error signal if not

// TODO: Validate other inputs like Name

const AddSheetForm = ({ handleAddSheet }) => {
  const [formIdInput, setFormIdInput] = useState('');
  const [formNameInput, setFormNameInput] = useState('New');
  // 1PMOhDi6kyuli2Ey7KdhauPfFgHWiAgPQ8wEPZV4JCJ0

  const onSubmit = () => {
    let id = formIdInput;
    let name = formNameInput;
    setFormIdInput('');
    setFormNameInput('');
    handleAddSheet({
      id,
      name,
    });
  };

  return (
    <FormControl width="full" maxWidth="lg">
      <FormLabel htmlFor="sheetId">Google Sheet ID</FormLabel>
      <Flex>
        <Input
          id="formName"
          value={formNameInput}
          onChange={(e) => setFormNameInput(e.target.value)}
          width="42"
        />
        <Input
          id="sheetId"
          placeholder="Google Sheet ID"
          value={formIdInput}
          onChange={(e) => setFormIdInput(e.target.value)}
        />
        <Button onClick={() => onSubmit()} type="submit">
          Go
        </Button>
      </Flex>

      <FormHelperText>
        This part: https://docs.google.com/spreadsheets/d/
        <strong>SHEET_ID</strong>/edit
      </FormHelperText>
    </FormControl>
  );
};

export default AddSheetForm;
