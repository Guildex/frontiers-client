import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { useState, useContext } from 'react';
import { createContext } from 'react';

import type { MenteeProfile, User } from '~/@generated/graphql';
import { UserRole } from '~/@generated/graphql';

type State = {
  steps: string[];
  currentStep: number;
  username: User['username'];
  email: User['email'];
  role: UserRole;
  objective: MenteeProfile['objective'];
  productionHourByDay: MenteeProfile['productionHourByDay'];
};

const initialState: State = {
  steps: ['アカウント情報', 'ロールの選択', 'ロールの詳細情報', '完了'],
  currentStep: 1,
  username: '',
  email: '',
  role: UserRole.Mentee,
  objective: '',
  productionHourByDay: 3,
};

const RegistrationStepContext = createContext(initialState);
const SetRegistrationStepContext = createContext<Dispatch<SetStateAction<State>>>(() => undefined);

export const RegistrationStepProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(initialState);

  return (
    <RegistrationStepContext.Provider value={state}>
      <SetRegistrationStepContext.Provider value={setState}>{children}</SetRegistrationStepContext.Provider>
    </RegistrationStepContext.Provider>
  );
};

export const useRegistrationStep = () => {
  const registrationStep = useContext(RegistrationStepContext);
  const setRegistrationStep = useContext(SetRegistrationStepContext);

  return [registrationStep, setRegistrationStep] as const;
};
