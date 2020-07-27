import Product from "../../models/Product";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const SET_PRODUCTS_SUCCESS = "SET_PRODUCTS_SUCCES";
export const SET_PRODUCTS_LOADING = "SET_PRODUCTS_LOADING";
export const SET_PRODUCTS_ERROR = "SET_PRODUCTS_ERROR";

export const fetchProducts = () => {
  return async dispatch => {
    try {
      dispatch({ type: SET_PRODUCTS_LOADING });

      const response = await fetch(
        "https://shopper-e5714.firebaseio.com/product.json"
      );

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const resData = await response.json();

      console.log(resData);
      const loadedProducts = () => {
        return Object.keys(resData).map(
          key =>
            new Product(
              key,
              "u1",
              resData[key].title,
              resData[key].imageUrl,
              resData[key].description,
              resData[key].price
            )
        );
      };

      dispatch({ type: SET_PRODUCTS_SUCCESS, products: loadedProducts() });
    } catch (err) {
      dispatch({ type: SET_PRODUCTS_ERROR });
    }
  };
};

export const deleteProduct = productId => {
  return async dispatch => {
    await fetch(
      `https://shopper-e5714.firebaseio.com/product/${productId}.json`,
      {
        method: "DELETE"
      }
    );

    dispatch({ type: DELETE_PRODUCT, pid: productId });
  };
};

export const createProduct = (title, description, imageUrl, price) => {
  return async dispatch => {
    const response = await fetch(
      "https://shopper-e5714.firebaseio.com/product.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl,
          price
        })
      }
    );

    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: CREATE_PRODUCT,
      productData: { id: resData.name, title, description, imageUrl, price }
    });
  };
};

export const updatedProduct = (id, title, description, imageUrl) => {
  return async dispatch => {
    await fetch(`https://shopper-e5714.firebaseio.com/product/${id}.json`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description,
        imageUrl
      })
    });

    dispatch({
      type: UPDATE_PRODUCT,
      pid: id,
      productData: { title, description, imageUrl }
    });
  };
};
