import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// console.log("env", import.meta.env.VITE_APP_BASE_URL);

// const customFetch = async (url, options) => {
//   return fetch(url, options); // You can customize this for SSR if needed
// };

// baseQuery: fetchBaseQuery({
//   baseUrl: import.meta.env.VITE_APP_BASE_URL,
//   fetchFn: customFetch, // Provide custom fetch function if needed
// })

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_URL,
    // baseUrl: "http://localhost:8000/",
    // fetchFn: customFetch, // Provide custom fetch function if needed
  }),
  // reducerPath: "adminApi",
  reducerPath: "API",
  tagTypes: [
    "User",
    "CreateBrands",
    "Brands",
    "Categories",
    "Products",
    "Conditions",
    "ConditionLabels",
    "Orders",
    "Sliders",
    "Series",
    "Stocks",
    "Coupons",
    "Services",
    "Services Orders",
    "Recycle",
    "Variants Questions",
  ],
  endpoints: (build) => ({
    getCategory: build.query({
      query: () => "/api/category",
      providesTags: ["Categories"],
    }),
    uploadCategoryImage: build.mutation({
      query: (data) => ({
        url: "/api/upload/categories",
        method: "POST",
        body: data,
      }),
    }),
    createCategory: build.mutation({
      query: (catData) => ({
        url: `api/category/add-category`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: catData,
      }),
      invalidatesTags: ["Categories"],
    }),
    updateCategory: build.mutation({
      query: ({ catId, data }) => ({
        url: `/api/category/update-category/${catId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),
    deleteCategory: build.mutation({
      query: (catId) => ({
        url: `/api/category/delete-category/${catId}`,
        method: "DELETE",
        // body: data,
      }),
      invalidatesTags: ["Categories"],
    }),
    uploadFileHandler: build.mutation({
      query: (data) => ({
        url: "/api/upload",
        method: "POST",
        body: data,
      }),
    }),
    uploadBrandImage: build.mutation({
      query: (data) => ({
        url: "/api/upload/brands",
        method: "POST",
        body: data,
      }),
    }),
    getAllBrand: build.query({
      query: () => `/api/brand`,
      providesTags: ["Brands"],
    }),
    getBrand: build.query({
      query: (catId) => `/api/brand/${catId}`,
      providesTags: ["CreateBrands", "Brands"],
    }),
    createBrand: build.mutation({
      query: (data) => ({
        url: "/api/brand/add-brand",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Brands"],
    }),
    updateBrand: build.mutation({
      query: ({ brandId, data }) => ({
        url: `/api/brand/update-brand/${brandId}`,
        method: "PUT",
        // credentials: "include",
        body: data,
      }),
      invalidatesTags: ["Brands"],
    }),
    deleteBrand: build.mutation({
      query: (brandId) => ({
        url: `/api/brand/delete-brand/${brandId}`,
        method: "DELETE",
        // body: data,
      }),
      invalidatesTags: ["Brands"],
    }),
    getAllProducts: build.query({
      query: ({ page, limit, search, categoryId }) => ({
        url: `/api/products`,
        method: "GET",
        params: { page, limit, search, categoryId },
      }),
      providesTags: ["Products"],
    }),
    getProducts: build.query({
      query: ({ brandId, search }) => ({
        url: `/api/products/${brandId}?search=${search}`,
      }),
      providesTags: ["Products"],
    }),
    getProductDetails: build.query({
      query: (prodId) => `/api/products/product-details/${prodId}`,
      providesTags: ["Products"],
    }),
    getProductQuestions: build.query({
      query: (prodId) => `/api/products/product/product-questions/${prodId}`,
      providesTags: ["Products"],
    }),
    createProduct: build.mutation({
      query: (data) => ({
        url: "/api/products/add-product",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      providesTags: ["Products"],
    }),
    uploadProductImage: build.mutation({
      query: (data) => ({
        url: "/api/upload/products",
        method: "POST",
        body: data,
      }),
    }),
    updateProduct: build.mutation({
      query: ({ productId, data }) => ({
        url: `/api/products/update-product/${productId}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    updatePriceDrop: build.mutation({
      query: ({ productId, data }) => ({
        url: `/api/products/update-pricedrop/${productId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    updateLaptopConfigurationsPriceDrop: build.mutation({
      query: ({ productId, data, type, brand }) => ({
        url: `/api/products/updateLaptopConfigurationsPriceDrop/${productId}?type=${type}&brand=${brand}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: build.mutation({
      query: (productId) => ({
        url: `/api/products/delete-product/${productId}`,
        method: "DELETE",
        // body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    getConditions: build.query({
      query: () => `/api/questions/conditions`,
      providesTags: ["Conditions"],
    }),
    createConditions: build.mutation({
      query: (data) => ({
        url: "/api/questions/add-conditions",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Conditions"],
    }),
    updateCondition: build.mutation({
      query: ({ conditionId, data }) => ({
        url: `/api/questions/update-condition/${conditionId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Conditions"],
    }),
    deleteCondition: build.mutation({
      query: ({ category, conditionId }) => ({
        url: `/api/questions/delete-condition?category=${category}&conditionId=${conditionId}`,
        method: "DELETE",
        // body: data,
      }),
      invalidatesTags: ["Conditions"],
    }),
    getConditionLabels: build.query({
      query: () => `/api/questions/conditionlabels`,
      providesTags: ["ConditionLabels"],
    }),
    createConditionLabels: build.mutation({
      query: (data) => ({
        url: "/api/questions/add-conditionlabel",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["ConditionLabels"],
    }),
    uploadConditionLabelsImage: build.mutation({
      query: (data) => ({
        url: "/api/upload/condition-labels",
        method: "POST",
        body: data,
      }),
    }),
    updateConditionLabel: build.mutation({
      query: ({ conditionLabelId, data }) => ({
        url: `/api/questions/update-conditionlabel/${conditionLabelId}`,
        method: "PUT",
        body: data,
      }),
      // invalidatesTags: ["ConditionLabels"],
    }),
    deleteConditionLabel: build.mutation({
      query: ({ category, conditionLabelId }) => ({
        url: `/api/questions/delete-conditionlabel?category=${category}&conditionLabelId=${conditionLabelId}`,
        method: "DELETE",
        // body: data,
      }),
      invalidatesTags: ["ConditionLabels"],
    }),

    // Orders
    getOrdersList: build.query({
      query: () => `/api/orders`,
      providesTags: ["Orders"],
    }),
    getOrder: build.query({
      query: (orderId) => `/api/orders/${orderId}`,
      providesTags: ["Orders"],
    }),
    createOrder: build.mutation({
      query: (data) => ({
        // url: "/api/orders/create-order",
        url: "/api/orders",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Orders"],
    }),
    uploadCustomerProofImage: build.mutation({
      query: (data) => ({
        url: "/api/upload/customer-proof",
        method: "POST",
        body: data,
      }),
    }),
    orderReceived: build.mutation({
      query: (data) => ({
        // url: `/api/orders/order-received`,
        url: `/api/orders/complete`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Orders"],
    }),
    orderCancel: build.mutation({
      query: ({ orderId, data }) => ({
        url: `/api/orders/cancel/${orderId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Orders"],
    }),
    deleteOrder: build.mutation({
      query: (orderId) => ({
        url: `/api/orders/delete-order/${orderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"],
    }),

    // Sliders
    getActiveSlidersList: build.query({
      query: () => `/api/sliders/active-sliders`,
      providesTags: ["Sliders"],
    }),
    getAllSliders: build.query({
      query: () => `/api/sliders/all-sliders`,
      providesTags: ["Sliders"],
    }),
    createSlider: build.mutation({
      query: (data) => ({
        url: "/api/sliders/create-slider",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Sliders"],
    }),
    uploadSliderImage: build.mutation({
      query: (data) => ({
        url: "/api/upload/sliders",
        method: "POST",
        body: data,
      }),
    }),
    updateSlider: build.mutation({
      query: ({ sliderId, data }) => ({
        url: `/api/sliders/update-slider/${sliderId}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Sliders"],
    }),
    deleteSlider: build.mutation({
      query: (sliderId) => ({
        url: `/api/sliders/delete-slider/${sliderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Sliders"],
    }),

    // Series
    getAllSeries: build.query({
      query: () => `/api/series`,
      providesTags: ["Series"],
    }),
    getBrandSeries: build.query({
      query: (brandId) => `/api/series/${brandId}`,
      // providesTags: ["Brands"],
      providesTags: ["Series"],
    }),
    createSeries: build.mutation({
      query: (data) => ({
        url: "/api/series/create-series",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Series"],
    }),
    updateSeries: build.mutation({
      query: ({ seriesId, data }) => ({
        url: `/api/series/update-series/${seriesId}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Series"],
    }),
    deleteSeries: build.mutation({
      query: (seriesId) => ({
        url: `/api/series/delete-series/${seriesId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Series"],
    }),
    getOTP: build.query({
      query: (mobileNo) => `/api/otp/${mobileNo}`,
      // providesTags: ["Brands"],
    }),
    generateOTP: build.mutation({
      query: (data) => ({
        url: "/api/otp/generate-otp",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Series"],
    }),
    getPhoneNumbers: build.query({
      query: () => `/api/otp`,
      // providesTags: ["Brands"],
    }),
    getStocks: build.query({
      query: () => `/api/stocks`,
      providesTags: ["Stocks", "Orders"],
    }),
    stockSold: build.mutation({
      query: (data) => ({
        url: `/api/stocks/stock-sold`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Stocks"],
    }),
    deleteCLImage: build.mutation({
      query: (data) => ({
        url: `/api/delete/delete-cl-image`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["ConditionLabels"],
    }),
    getCoupon: build.query({
      query: () => `/api/coupons`,
      providesTags: ["Coupons"],
    }),
    createCoupon: build.mutation({
      query: (data) => ({
        url: `/api/coupons/add-coupon`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Coupons"],
    }),
    deleteCoupon: build.mutation({
      query: (couponId) => ({
        url: `/api/coupons/delete-coupon/${couponId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Coupons"],
    }),

    // SERVICES
    getAllServices: build.query({
      query: ({ page, limit, search }) => ({
        // url: `/api/search-services`,
        url: `/api/search`,
        method: "GET",
        params: { page, limit, search },
      }),
      providesTags: ["Services"],
    }),
    getServices: build.query({
      query: () => `/api/services`,
      providesTags: ["Services"],
    }),
    createServices: build.mutation({
      query: (data) => ({
        // url: `/api/services/add-service`,
        url: `/api/services`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Services"],
    }),
    uploadServicesImage: build.mutation({
      query: (data) => ({
        url: "/api/upload/services",
        method: "POST",
        body: data,
      }),
    }),
    updateService: build.mutation({
      query: ({ serviceId, data }) => ({
        // url: `/api/services/update-service/${serviceId}`,
        url: `/api/services/${serviceId}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Services"],
    }),
    deleteService: build.mutation({
      query: ({ serviceId, serviceType, serviceFrom }) => ({
        // url: `/api/services/delete-service?serviceId=${serviceId}&serviceType=${serviceType}&serviceFrom=${serviceFrom}`,
        url: `/api/services?serviceId=${serviceId}&serviceType=${serviceType}&serviceFrom=${serviceFrom}`,
        method: "DELETE",
        // body: data,
      }),
      invalidatesTags: ["Services"],
    }),

    // Service Orders
    getServicesOrders: build.query({
      query: () => `/api/services/orders`,
      providesTags: ["Services Orders"],
    }),
    getServiceOrder: build.query({
      query: (serviceOrderId) => `/api/services/orders/${serviceOrderId}`,
      providesTags: ["Services Orders"],
    }),

    createServiceOrder: build.mutation({
      query: (data) => ({
        url: `/api/services/orders`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Services Orders"],
    }),
    serviceOrderComplete: build.mutation({
      query: ({ serviceOrderId, data }) => ({
        url: `/api/services/orders/${serviceOrderId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Services Orders"],
    }),
    cancelServiceOrder: build.mutation({
      query: ({ serviceOrderId, data }) => ({
        url: `/api/services/orders/cancel/${serviceOrderId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Services Orders"],
    }),
    deleteServiceOrder: build.mutation({
      query: (serviceOrderId) => ({
        url: `/api/services/orders/${serviceOrderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Services Orders"],
    }),

    // DELETE IMAGE
    deleteImage: build.mutation({
      query: (data) => ({
        url: `/api/delete/delete-image`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["ConditionLabels"],
    }),

    // Recycle
    getRecycleOrder: build.query({
      query: (recycleOrderId) => `/api/recycle/orders/${recycleOrderId}`,
      providesTags: ["Recycle"],
    }),
    getRecycleOrders: build.query({
      query: () => `/api/recycle/orders`,
      providesTags: ["Recycle"],
    }),
    createRecycleOrder: build.mutation({
      query: (data) => ({
        url: `/api/recycle/orders`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Recycle"],
    }),
    recycleOrderComplete: build.mutation({
      query: ({ recycleOrderId, data }) => ({
        url: `/api/recycle/orders/${recycleOrderId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Recycle"],
    }),
    recycleOrderCancel: build.mutation({
      query: ({ recycleOrderId, data }) => ({
        url: `/api/recycle/orders/cancel/${recycleOrderId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Recycle"],
    }),
    deleteRecycleOrder: build.mutation({
      query: (recycleOrderId) => ({
        url: `/api/recycle/orders/${recycleOrderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Recycle"],
    }),

    // VARIANT WISE QUESTIONS
    getSingleProduct: build.query({
      query: () => `/api/questions/single-product`,
      providesTags: ["Variants Questions"],
    }),
    getVariantsQuestions: build.query({
      query: () => `/api/questions/variants-questions`,
      providesTags: ["Variants Questions"],
    }),
    createVariantQuestions: build.mutation({
      query: (data) => ({
        url: "/api/questions/add-variant-questions",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Variants Questions"],
    }),
    updateVariantQuestions: build.mutation({
      query: ({ variantQuestionsId, data }) => ({
        url: `/api/questions/update-variant-questions/${variantQuestionsId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Variants Questions"],
    }),
    deleteVariantQuestions: build.mutation({
      query: (variantQuestionsId) => ({
        url: `/api/questions/delete-variant-questions/${variantQuestionsId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Variants Questions"],
    }),
    dashboardDetails: build.query({
      query: () => "/api/admin/dashboard",
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useUploadCategoryImageMutation,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useUploadFileHandlerMutation,
  useUploadBrandImageMutation,
  useGetAllBrandQuery,
  useGetBrandQuery,
  useCreateBrandMutation,
  useUpdateBrandMutation,
  useDeleteBrandMutation,
  useCreateProductMutation,
  useUploadProductImageMutation,
  useUpdateProductMutation,
  useGetAllProductsQuery,
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useGetProductQuestionsQuery,
  useUpdatePriceDropMutation,
  useUpdateLaptopConfigurationsPriceDropMutation,
  useDeleteProductMutation,
  useGetConditionsQuery,
  useCreateConditionsMutation,
  useUpdateConditionMutation,
  useDeleteConditionMutation,
  useGetConditionLabelsQuery,
  useCreateConditionLabelsMutation,
  useUploadConditionLabelsImageMutation,
  useUpdateConditionLabelMutation,
  useDeleteConditionLabelMutation,
  useGetOrderQuery,
  useGetOrdersListQuery,
  useCreateOrderMutation,
  useUploadCustomerProofImageMutation,
  useOrderReceivedMutation,
  useOrderCancelMutation,
  useDeleteOrderMutation,
  useGetActiveSlidersListQuery,
  useGetAllSlidersQuery,
  useCreateSliderMutation,
  useUploadSliderImageMutation,
  useUpdateSliderMutation,
  useDeleteSliderMutation,
  useGetAllSeriesQuery,
  useGetBrandSeriesQuery,
  useCreateSeriesMutation,
  useUpdateSeriesMutation,
  useDeleteSeriesMutation,
  useGetOTPQuery,
  useGenerateOTPMutation,
  useGetPhoneNumbersQuery,
  useGetStocksQuery,
  useStockSoldMutation,
  useDeleteCLImageMutation,
  useGetCouponQuery,
  useCreateCouponMutation,
  useDeleteCouponMutation,
  useGetServicesQuery,
  useCreateServicesMutation,
  useUploadServicesImageMutation,
  useUpdateServiceMutation,
  useGetAllServicesQuery,
  useGetServicesOrdersQuery,
  useGetServiceOrderQuery,
  useCreateServiceOrderMutation,
  useServiceOrderCompleteMutation,
  useCancelServiceOrderMutation,
  useDeleteServiceOrderMutation,
  useDeleteServiceMutation,
  useDeleteImageMutation,
  useGetRecycleOrdersQuery,
  useGetRecycleOrderQuery,
  useCreateRecycleOrderMutation,
  useRecycleOrderCompleteMutation,
  useRecycleOrderCancelMutation,
  useDeleteRecycleOrderMutation,
  useGetSingleProductQuery,
  useGetVariantsQuestionsQuery,
  useCreateVariantQuestionsMutation,
  useUpdateVariantQuestionsMutation,
  useDeleteVariantQuestionsMutation,
  useDashboardDetailsQuery,
} = api;

// useGetAllQuestionsQuery,
// useGetQuestionsQuery,
// useCreateQuestionMutation,
// useUpdateQuestionMutation,

// getAllQuestions: build.query({
//   query: () => `/api/questions`,
// }),
// getQuestions: build.query({
//   query: (questionsId) => `/api/questions/${questionsId}`,
// }),
// createQuestion: build.mutation({
//   query: (data) => ({
//     url: "/api/questions/add-questions",
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: data,
//   }),
// }),
// updateQuestion: build.mutation({
//   query: ({ questionId, data }) => ({
//     url: `/api/questions/update-condition/${conditionId}`,
//     method: "PUT",
//     body: data,
//   }),
// }),
