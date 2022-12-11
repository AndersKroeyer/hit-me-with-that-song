import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useCallback, useState } from 'react';
import { Quiz } from '../../Components/types';

interface QuizDropDownProps {
  content: Quiz[];
  onSelectedQuizChange: (key: string) => void;
  selectedQuizKey: string;
}

function DropDownItem({ key }: Quiz) {
  return (
    <MenuItem value={key} key={key}>
      {key}
    </MenuItem>
  );
}

export default function Component({
  content,
  onSelectedQuizChange,
  selectedQuizKey,
}: QuizDropDownProps) {
  const [selected, setSelected] = useState(selectedQuizKey);

  const onChange = useCallback(
    (event: SelectChangeEvent) => {
      setSelected(event.target.value);
      onSelectedQuizChange(event.target.value);
    },
    [onSelectedQuizChange],
  );

  return (
    <Select value={selected} onChange={onChange} style={{ minWidth: '150px' }}>
      {content.map((quiz) => DropDownItem(quiz))}
    </Select>
  );
}
