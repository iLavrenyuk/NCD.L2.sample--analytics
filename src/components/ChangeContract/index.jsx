import React, { useState } from 'react';
import { CrossX } from '../CrossX';
import { useStore } from '../../store';
import { ReactComponent as ErrorSvg } from '../../assets/svg/error.svg';
import { ReactComponent as NearLogoSvg } from '../../assets/svg/nearLogo.svg';
import { ReactComponent as NearLogoNameSvg } from '../../assets/svg/nearLogoName.svg';
import { ReactComponent as NearLogoBlackSvg } from '../../assets/svg/nearLogoBlack.svg';

export const ChangeContract = () => {
  const { contractId, setContractId, apiError, setApiError } = useStore();
  const defaultContractId = process.env.REACT_APP_CONTRACT_ID;

  const [isOpen, setIsOpen] = useState();
  const [isOpenInfo, setIsOpenInfo] = useState();
  const [inputContract, setInputContract] = useState('');

  const handleChange = (e) => {
    setInputContract(e.target.value);
    setApiError(false);
  };

  const setDefaultContractId = () => {
    localStorage.setItem('CONTRACT_ID', defaultContractId);
    setContractId(defaultContractId);
  };

  return !isOpen ? (
    isOpenInfo ? (
      <>
        <div className="fixed z-20 bottom-0 md:right-60 w-full md:w-376 rounded-t-3xl shadow-xl bg-gradient-to-r from-black to-black hover:from-purple-500 hover:to-purple-800 text-black hover:text-purple-500">
          <button onClick={() => setIsOpenInfo(false)} className="absolute top-4 right-4 text-white">
            <CrossX width={14} height={14} />
          </button>

          <div className="flex justify-center">
            <div className="absolute z-20 bg-white rounded-b-full opacity-50 pulsing"> </div>
            <button
              onClick={() => setIsOpen(true)}
              className="relative z-30 bg-white w-61 h-30 rounded-b-full flex items-center justify-center box-content"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2"
                width="21"
                height="13"
                viewBox="0 0 21 13"
                fill="none"
              >
                <path
                  d="M18.3659 12.5099L20.1453 10.7299L10.1924 0.839905L0.239445 10.7399L2.01891 12.5099L10.1924 4.3799L18.3659 12.5099Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-5 mt-7 mb-8">
            {contractId === defaultContractId ? (
              <>
                <div className="relative flex items-center justify-center">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="relative z-20 flex items-center justify-center bg-white w-65 h-65 rounded-full pulsing-border hover:border-purple-400 bg-gradient-to-r from-white to-white hover:from-purple-500 hover:to-purple-800"
                  >
                    <NearLogoSvg />
                  </button>
                </div>
                <div className="text-white">
                  <p className="text-base font-bold">
                    Try frontend with your <br /> deployed contract ID
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center text-white">
                <p className="text-base font-bold">Current ID:</p>
                <p className="text-base font-bold">{contractId}</p>
              </div>
            )}
            <img src={require('../../assets/img/Bitmap.png')} alt="" className="" />
          </div>
        </div>
      </>
    ) : (
      <div className="fixed z-50 bottom-16 right-60">
        <button
          onClick={() => setIsOpenInfo(true)}
          className="w-65 h-65 box-border pulsing-border border-gray-600 hover:border-purple-400 flex items-center justify-center rounded-full bg-gradient-to-r from-black to-black hover:from-purple-500 hover:to-purple-800"
        >
          <NearLogoBlackSvg />
        </button>
      </div>
    )
  ) : (
    <div className="fixed top-0 left-0 z-40 w-full h-screen flex items-center justify-center">
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsOpen(false);
            setIsOpenInfo(false);
          }
        }}
        className="absolute w-full h-screen bg-gray-400 opacity-50 z-40"
      />
      <div className="relative z-50 w-376 bg-white rounded-xl flex flex-col items-center px-5 py-8">
        <button
          onClick={() => {
            setIsOpen(false);
            setIsOpenInfo(false);
          }}
          className="absolute right-4 top-4 text-black hover:text-purple-800"
        >
          <CrossX width={24} height={24} />
        </button>

        <div className="">
          <NearLogoNameSvg />
        </div>

        <p className="mt-4 text-black text-2xl font-bold">Contract deploy</p>

        <p className="text-xs md:text-sm text-gray-500 text-center mt-1 font-bold">
          Please make sure that you put in input field correct contract id and your contract is deployed correctly. This
          is{' '}
          <a
            href="https://github.com/Learn-NEAR/NCD.L1.sample--near-analytics"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            contract source code
          </a>{' '}
          with setup instructions. <br />
          <span className="text-black mt-1">
            If your input is not valid, your will see error message with description of error
          </span>
        </p>

        <div className="text-xs md:text-sm font-bold mt-6 text-center">
          <p className="text-blue-500">Current ID:</p>
          <p className="text-black">{contractId}</p>
        </div>

        <form action="" onSubmit={() => setContractId(inputContract)} className="w-full">
          {/* <!-- Normal input --> */}
          <div className="mt-4">
            <div className="flex items-center justify-between px-4">
              <p className="text-sm font-bold text-blue-500">
                Set your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-800">
                  NEAR ID
                </span>
              </p>
              {apiError ? (
                <p className="text-xs text-orange-500 flex items-center font-semibold">
                  <ErrorSvg />
                  Occurred error
                </p>
              ) : null}
            </div>
            <input
              onChange={handleChange}
              value={inputContract}
              type="text"
              placeholder="dev-[contract ID]"
              className={`mt-2 pl-6 h-11 w-full rounded-full border ${
                apiError ? 'border-orange-500' : 'border-gray-400 focus:border-purple-800'
              }  bg-white input-shadow outline-none text-sm font-semibold placeholder-gray-400`}
            />
          </div>

          {inputContract && inputContract !== contractId ? (
            <button
              type="submit"
              className="mt-4 w-full h-65 flex items-center justify-center rounded-full text-xl font-semibold text-white border-2 border-white bg-gradient-to-r from-purple-500 to-purple-800 hover:from-white hover:to-white hover:text-purple-800 hover:border-purple-800 transform active:scale-95 duration-100"
            >
              Deploy contract
            </button>
          ) : (
            <button
              disabled
              className="mt-4 w-full h-65 flex items-center justify-center rounded-full text-xl font-semibold text-white border-2 border-white bg-gradient-to-r from-purple-500 to-purple-800 opacity-50 cursor-not-allowed"
            >
              Deploy contract
            </button>
          )}

          <button
            onClick={setDefaultContractId}
            className="mt-4 w-full h-65 flex items-center justify-center rounded-full text-xl text-orange-500 font-semibold border-2 border-orange-500 hover:bg-orange-500 hover:text-white transform active:scale-95 duration-100"
          >
            Reset to default
          </button>
        </form>
      </div>
    </div>
  );
};
