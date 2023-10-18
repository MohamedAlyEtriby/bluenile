import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const EventTickets = () => {
  const { token } = useSelector((state) => state.auth);
  const [ticketsData, setTickets] = useState([]);
  useEffect(() => {
    axios
      .get("https://blueboat.bluenileboat.com/api/reservations", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setTickets([...res.data.data]));
  });
  return (
    <div>
      <h1>MY EVENTS</h1>
      <hr style={{ height: "5px", backgroundColor: "white", border: "none" }} />
      {ticketsData.length !== 0 ? (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Event</th>
              <th>Number of tickets</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {ticketsData?.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.event.name}</td>
                  <td>{item.tickets.length}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <div className="flex">
          <div className="loader1"></div>
        </div>
      )}
    </div>
  );
};

export default EventTickets;
