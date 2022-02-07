import React from 'react';
import { ManageButtons } from '../ManageButtons';
import { DatasetComponent } from '../DatasetComponent';

export const DatasetBody = () => {
  return (
    <section>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 md:mt-20 gap-x-0 xl:gap-x-20">
          <div className="col-span-1">
            <div className="container mx-auto px-3 md:px-0">
              <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">Name of dataset.</h1>
              <p className="text-base leading-relaxed mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ante sed aenean dolor pellentesque
                congue ipsum. Dignissim aliquet consequat, ultricies molestie gravida sem. Id semper vestibulum lectus
                nisl. Diam nibh lacus id.
              </p>
              <ManageButtons
                onSubmit={() => {}}
                submitText="Edit dataset"
                onReset={() => {}}
                resetText="Delete dataset"
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 mt-12 lg:mt-0">
            <div className="mx-auto px-6">
              <DatasetComponent type="bars" />
              <DatasetComponent type="pie" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
