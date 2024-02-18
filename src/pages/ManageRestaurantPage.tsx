import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  // This means that, whenever the page load for the first time, it will always trying to fetch the user restaurant
  // if the restaurant exist, isEditing is TRUE
  // if the restaurant doesn't exist, isEditing is FALSE
  const isEditing = !!restaurant;

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={isEditing ? updateRestaurant : createRestaurant}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  );
};

export default ManageRestaurantPage;
