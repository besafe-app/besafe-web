import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REQUEST_CONDITION } from 'store/ducks/conditionsReducer';
import Collapse from 'components/core/Collapse';
import Checkbox from 'components/core/Checkbox';
import Radio from 'components/core/Radio';
import { FlexColumn } from 'components/core/Grid';
import StatusCard from 'components/core/StatusCard';
import * as S from './FloatListStyle';

const conditionsMock = [
  {
    id: 1,
    name: 'Asma',
  },
  {
    id: 2,
    name: 'Câncer',
  },
  {
    id: 3,
    name: 'Diabetes',
  },
];

const FloatList = () => {
  const [gender, setGender] = useState('all');
  const [age, setAge] = useState('all');
  const [pickedConditions, setPickedConditions] = useState([]);
  const { conditions } = useSelector((state) => state.conditionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!conditions?.length) {
      dispatch({ type: REQUEST_CONDITION });
    }
  }, []);

  const handleChange = ({ target: { value, checked } }) => {
    const conditionIdToAdd = Number(value);

    if (checked) {
      setPickedConditions([...pickedConditions, conditionIdToAdd]);
    } else {
      setPickedConditions(pickedConditions
        .filter((conditionID) => conditionID !== conditionIdToAdd));
    }
  };

  return (
    <S.Teste>
      <StatusCard />
      <Collapse title="Sexo">
        <FlexColumn>
          <Radio
            label="Todos"
            id="all"
            name="gender"
            value="all"
            handleChange={() => setGender('all')}
            checked={gender === 'all'}
          />
          <Radio
            label="Masculino"
            id="male"
            name="gender"
            value="M"
            handleChange={() => setGender('M')}
            checked={gender === 'M'}
          />
          <Radio
            label="Feminino"
            id="female"
            name="gender"
            value="F"
            handleChange={() => setGender('F')}
            checked={gender === 'F'}
          />
        </FlexColumn>
      </Collapse>
      <Collapse title="Faixa etária">
        <FlexColumn>
          <Radio
            label="Todos"
            id="age_all"
            name="age"
            value="all"
            handleChange={() => setAge('all')}
            checked={age === 'all'}
          />
          <Radio
            label="0 - 9"
            id="age_0"
            name="age"
            value="0"
            handleChange={() => setAge('0')}
            checked={age === '0'}
          />
          <Radio
            label="10 - 19"
            id="age_10"
            name="age"
            value="10"
            handleChange={() => setAge('10')}
            checked={age === '10'}
          />
          <Radio
            label="20 - 29"
            id="age_20"
            name="age"
            value="20"
            handleChange={() => setAge('20')}
            checked={age === '20'}
          />
          <Radio
            label="30 - 39"
            id="age_30"
            name="age"
            value="30"
            handleChange={() => setAge('30')}
            checked={age === '30'}
          />
          <Radio
            label="40 - 49"
            id="age_40"
            name="age"
            value="40"
            handleChange={() => setAge('40')}
            checked={age === '40'}
          />
          <Radio
            label="50 - 59"
            id="age_50"
            name="age"
            value="50"
            handleChange={() => setAge('50')}
            checked={age === '50'}
          />
          <Radio
            label="60 - 69"
            id="age_60"
            name="age"
            value="60"
            handleChange={() => setAge('60')}
            checked={age === '60'}
          />
          <Radio
            label="70 - 79"
            id="age_70"
            name="age"
            value="70"
            handleChange={() => setAge('70')}
            checked={age === '70'}
          />
          <Radio
            label="80 - 89"
            id="age_80"
            name="age"
            value="80"
            handleChange={() => setAge('80')}
            checked={age === '80'}
          />
          <Radio
            label="90 +"
            id="age_90"
            name="age"
            value="90"
            handleChange={() => setAge('90')}
            checked={age === '90'}
          />
        </FlexColumn>
      </Collapse>
      <Collapse title="Condições Preexistentes">
        <FlexColumn>
          {conditionsMock.map(({ id, name }) => (
            <Checkbox
              key={id}
              label={name}
              id={`condition_${id}`}
              name={`condition_${id}`}
              value={id}
              handleChange={handleChange}
            />
          ))}
        </FlexColumn>
      </Collapse>
    </S.Teste>
  );
};
export default FloatList;
