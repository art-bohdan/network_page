//itemId = value to compare(значение на сравнение)
//objPropName = object property (свойство которое берем у объекта)
//newObjProps =  part of the object change (объект который нужно изменить)

export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
  return items.map(user => {
    if (user[objPropName] === itemId) {
      //if Id value matches, return  new followed
      return {...user, ...newObjProps}
    }
    return user;
  })
}