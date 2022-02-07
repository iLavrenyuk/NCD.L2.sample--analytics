import React from 'react';
import { UserData } from '../UserData';
import { useStore } from '../../store';
import { signOut } from '../../services/near';
import { ManageButtons } from '../ManageButtons';

export const ProfileBlock = ({ className }) => {
  const { accountId, setAccountId } = useStore();

  const handleSignOut = () => {
    signOut();
    setAccountId(null);
  };

  return (
    <>
      <div className={`flex ${className ?? ''}`}>
        <UserData accountId={accountId} />
      </div>

      <ManageButtons
        submitText="Edit profile"
        onReset={handleSignOut}
        resetText="Logout"
        resetIcon={<img src={require('../../assets/img/login-box-line.png')} alt="" className="ml-2" />}
      />

      <p className="text-sm mt-9">
        Lorem ipsum dolor sit amen, consenter advising elite. Intercut ante sed aeneas dolor pellentesque congue ipsum.
        Dignissim aliquet consequat, ultricies molestie gravida sem. Id semper vestibulum lectus nisl. Diam nibh lacus
        id.
      </p>
    </>
  );
};
