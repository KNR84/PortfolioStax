//API manager to crud portfolio items

//do i need to get portfolio item by portfolioItem Id?? I have it in my back end

const baseUrl = '/api/PortfolioItem';

// Function to fetch all portfolio items
export const getAllPortfolioItems = () => {
  return fetch(baseUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    });
};

// Function to add a portfolioItem
export const addPortfolioItem = (singlePortfolioItem) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singlePortfolioItem),
  });
};

// Function to edit a portfolioItem
export const editPortfolioItem = (portfolioItem) => {
  return fetch(`${baseUrl}/${portfolioItem.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(portfolioItem)
  });
};

// Function to get a portfolioItem by id
export const getPortfolioItemById = (id) => {
  return fetch(`${baseUrl}/portfolio/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    });
};

//Function to delete a portfolioItem
export const deletePortfolioItem = (id) => {
    return fetch(`${baseUrl}/${id}`, {
      method: "DELETE"
    })
  }
