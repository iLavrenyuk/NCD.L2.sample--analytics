import React from 'react';
import { UserData } from '../UserData';
import { useStore } from '../../store';
import { signOut } from '../../services/near';

export const ManageProfile = ({ className }) => {
  const { accountId, setAccountId } = useStore();

  const handleSignOut = () => {
    signOut();
    setAccountId(null);
  };

  return (
    <>
      <div className={`mt-8 flex ${className}`}>
        <UserData accountId={accountId} />
      </div>

      <div className="mt-8 space-y-6">
        <a href="#" className="inline-block w-full btn border">
          Edit profile
        </a>
        <button
          onClick={handleSignOut}
          className="flex items-center justify-center w-full py-3 border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white"
        >
          Logout
          <img src={require('../../assets/img/login-box-line.png')} alt="" className="ml-2" />
        </button>
      </div>

      <p className="text-sm mt-9">
        Lorem ipsum dolor sit amen, consenter advising elite. Intercut ante sed aeneas dolor pellentesque congue ipsum.
        Dignissim aliquet consequat, ultricies molestie gravida sem. Id semper vestibulum lectus nisl. Diam nibh lacus
        id.
      </p>
    </>
  );
};
