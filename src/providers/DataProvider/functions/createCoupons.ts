import { CreateParams } from "react-admin";

const createCoupons = async (
  params: CreateParams,
  resource: string,
  method: Function
) => {
  const { data } = params;
  const { validFrom, validUntil, limitedByDate } = data;

  if (validFrom && validUntil && limitedByDate) {
    const validFromTimestamp = new Date(validFrom).getTime();
    const validUntilTimestamp = new Date(validUntil).getTime();

    if (validFromTimestamp > validUntilTimestamp) {
      throw new Error("A data de início deve ser anterior à data de final");
    }

    if (validUntilTimestamp < Date.now()) {
      throw new Error("A data de fim deve ser posterior à data atual");
    }

    data.validFrom = validFromTimestamp;
    data.validUntil = validUntilTimestamp;

    return method(resource, params);
  }

  return method(resource, {
    ...params,
    data: {
      ...data,
      validFrom: "",
      validUntil: "",
    },
  });
};

export default createCoupons;
