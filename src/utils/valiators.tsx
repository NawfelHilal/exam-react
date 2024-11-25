export const isValidId = (id: string | undefined): boolean => {
    return id !== undefined && Number.isInteger(Number(id)) && Number(id) > 0;
  };
  