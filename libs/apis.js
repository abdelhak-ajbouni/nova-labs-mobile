const getSellers = (page, perPage, q) => {
  return fetch(`http://10.0.2.2:3200/api/sellers/?page=${page}&perPage=${perPage}&q=${q}`)
    .then((response) => response.json())
    .catch(error => console.log(error));
}

const getSellerById = (sellerId, date) => {
  return fetch(`http://10.0.2.2:3200/api/sellers/${sellerId}?date=${date}`)
  .then((response) => response.json())
  .catch(error => console.log(error));
}

const addRequestToTimeSlot = (sellerId, timeSlotsId, body) => {
  return fetch(`http://10.0.2.2:3200/api/sellers/${sellerId}/timeslots/${timeSlotsId}/requests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then((response) => response.json())
  .catch(error => console.log(error));
}

export {
  getSellers,
  getSellerById,
  addRequestToTimeSlot
}