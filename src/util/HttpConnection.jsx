const url = "http://localhost:4000";

export const op_all = "/donuts";
export const op_detail = "/donuts/:id";

const HttpConnection = async (op, onSuccess, onError, method = "GET") => {
  const response = await fetch(`${url}${op}`, {
    method: method,
  });
  if (!response.ok) {
    throw new Error("Error al obtener los detalles del donut");
  } else {
    try {
      const item = await response.json();
      onSuccess(item);
    } catch (error) {
      onError();
    }
  }
};

export default HttpConnection;
