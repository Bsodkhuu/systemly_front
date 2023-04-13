import Layout from "../../../components/layout";
import { Alert } from "flowbite-react";
import React from "react";

const Messej = () => {
  return (
    <Layout>
      <Alert
        color="success"
        rounded={false}
        withBorderAccent={true}
        additionalContent={
          <React.Fragment>
            <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
              Захиалга үүсгэсэнд баярлалаа. Агуулахын үлдэгдэлээ шалгаж байна.
              Бид таньд 24 цагийн дараа хариу өгөх болно.
            </div>
            <div className="flex">
              <a href="/my">
                <button
                  type="button"
                  className="mr-2 inline-flex items-center rounded-lg bg-green-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900">
                  Миний захиалга харах
                </button>
              </a>
            </div>
          </React.Fragment>
        }>
        <h3 className="text-lg font-medium text-green-700 dark:text-green-800">
          Агуулахын үлдэгдэл шалгаж байна.
        </h3>
      </Alert>
    </Layout>
  );
};

export default Messej;
