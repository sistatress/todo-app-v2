import React from "react";
import Input from "@material-ui/core/Input";

// const InputUI = ({ value, ...action }, ref) => {

//   //console.log(`Itemcomponent: itemID: ${itemId}`);

//   const handleInput = action.handleInput;
//   const updateItem = action.updateItem;
//   const createItem = action.createItem;
//   const itemId = action.itemId;

//   const inputOnChangeAction =
//     updateItem === undefined
//       ? (e) => handleInput(e.target.value)
//       : (e) => updateItem(e.target.value, itemId); // A VIRER

//   const inputOnKeyPressAction =
//     createItem === undefined
//       ? () =>
//           console.log(
//             "TODO: tap Enter in list should permit to focus next item (input) "
//           )
//       : (event) => createItem(event);

//   return (
//     <>
//       <Input
//         inputComponent="input"
//         value={value}
//         onChange={inputOnChangeAction}
//         onKeyPress={inputOnKeyPressAction}
//       />
//     </>
//   );
// };

const InputUI = ({ value, handleInput, createItem }, ref) => {
  return (
    <>
      <Input
        inputComponent="input"
        value={value}
        handleInput={handleInput}
        createItem={createItem}
      />
    </>
  );
};

export default InputUI;

export const logInputAction = (
  handleInput,
  updateItem,
  createItem,
  inputOnChangeAction,
  inputOnKeyPressAction
) => {
  console.log(` 
  *********      Input actions :

  ---------------handleInput---------------

  ${handleInput}

  ---------------updateItem---------------------

  ${updateItem}

  ---------------createItem---------------------

  ${createItem}

  ---------------inputOnChangeAction-----------------

  ${inputOnChangeAction}

  ---------------inputOnKeyPressAction---------------

  ${inputOnKeyPressAction}
  
  *********`);
};
