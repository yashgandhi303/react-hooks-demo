import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getOnBoardingData } from '../services/api';
import { Typography, Layout, Table, Button, message } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

interface IUserData {
  id: string,
  college: string,
  email: string,
  experienceYear: string,
  firstName: string,
  lastCompany: string,
  lastName: string,
  phoneNumber: number,
  whyInterested: string,
  fullName: string
}

const Home: React.FC = () => {

  const [data, setData] = useState<any>([]);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['hey', 'this', 'is', 'cool'];
  const word: string = words[wordIndex];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: any = await getOnBoardingData();
        setData(result);
      } catch (error) {
        message.error(error);
      }
    }
    fetchData();
  }, []);


  const columns = [
    {
      title: 'First name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'College',
      key: 'college',
      dataIndex: 'college',
    },
    {
      title: 'Previous Company',
      key: 'lastCompany',
      dataIndex: 'lastCompany',
    },
    {
      title: 'Experience',
      key: 'experienceYear',
      dataIndex: 'experienceYear',
    },
  ];

  const computeLetterCount = (word: string) => {
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
  };

  const letterCount = useMemo(() => computeLetterCount(word), [word]);

  return (
    <Content className="container-div">
      <Title>
        Welcome to The Future School!
      </Title>
      <Paragraph>"{word}" has {letterCount} letters</Paragraph>
      <Button
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      >
        UseMemo usage
      </Button>
      <Button>
        <Link to={`/onboarding/1`}>
          On Boarding
        </Link>
      </Button>

      <Table columns={columns} dataSource={data} />
    </Content>
  );
};

export default Home;
