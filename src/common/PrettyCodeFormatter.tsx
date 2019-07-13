import React, {ReactText} from 'react';

export interface IProps {
  data: string | Object;
  replacer: ReactText[] | null | undefined;
  space?: number;
}

const PrettyCodeFormatter: React.FC<IProps> = ({data, replacer = null, space = 4}) => {
  if (!data) {
    return null;
  }
  const dataString: string =
    typeof data === 'string' ? data : JSON.stringify(data, replacer, space);
  return (
    <pre>
      <code>{dataString}</code>
    </pre>
  );
};

export default PrettyCodeFormatter;
