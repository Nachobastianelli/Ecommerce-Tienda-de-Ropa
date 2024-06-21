import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url, {
            headers: {
                accept: "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((fetchedData) => {
                const sortedData = fetchedData.sort((a, b) => b.id - a.id);
                setData(sortedData);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [url]);

    const addData = (newData) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("The response has some errors");
                }
                return response.json();
            })
            .then((createdData) => {
                setData((prevData) => [createdData, ...prevData]);
            })
            .catch((error) => console.error("Error adding data:", error));
    };

    const deleteData = (id) => {
        fetch(`${url}/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                setData((prevData) => prevData.filter((item) => item.id !== id));
            })
            .catch((error) => console.error("Error deleting data:", error));
    };

    const updateData = (id, updatedData) => {
        fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not Ok");
                }
                return response.json();
            })
            .then((data) => {
                setData((prevData) => prevData.map((item) => (item.id === id ? data : item)));
            })
            .catch((error) => console.error("Error updating data:", error));
    };

    return { data, error, loading, addData, deleteData, updateData };
};

export default useFetch;