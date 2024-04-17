const getStoredJobApplication = () => {
  const storedApplication = localStorage.getItem("Job-application");
  if (storedApplication) {
    return JSON.parse(storedApplication);
  }

  return [];
};

const saveJobApplication = (id) => {
  const storedjobApplication = getStoredJobApplication();
  const exists = storedjobApplication.find((jobId) => jobId === id);
  if (!exists) {
    storedjobApplication.push(id);
    localStorage.setItem("Job-application", JSON.stringify(storedjobApplication));
  }
};

export { getStoredJobApplication, saveJobApplication };
