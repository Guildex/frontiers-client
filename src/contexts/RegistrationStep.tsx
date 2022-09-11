import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { useState, useContext } from 'react';
import { createContext } from 'react';

import { UserRole } from '~/@generated/graphql';

type State = {
  currentStep: number;
  role: UserRole;
};

const initialState: State = {
  currentStep: 1,
  role: UserRole.Mentee,
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
