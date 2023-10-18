import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const PartitionTickets = () => {
  const { token } = useSelector((state) => state.auth);
  const [ticketsData, setTickets] = useState([]);
  const [tickets, setTicketss] = useState([]);
  const [details, setdetails] = useState(false);
  const data = { tickets }; // the JSON data

 console.log(ticketsData)

  useEffect(() => {
    axios
      .get("https://blueboat.bluenileboat.com/api/singlereservations", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTickets([...res.data.data]);
        setTicketss([...res.data.data]);
      });
  }, []);
  return (
    <div>
      <h1>MY PARTITIONS</h1>
      <hr style={{ height: "5px", backgroundColor: "white", border: "none" }} />
      {ticketsData.length !== 0 ? (
        <div>
          <Table
            striped
            bordered
            hover
            variant="dark"
            style={{ width: "100%" }}
          >
            {!details ? (
              <>
                {" "}
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
                        <td>{item.partition.name}</td>
                        <td>{item.tickets.length}</td>
                        <td>{item.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </>
            ) : (
              <>
                {" "}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Partition</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {ticketsData?.map((item) => {
                    console.log(item);
                    return (
                      <tr>
                        <td>{item.tickets[0].name}</td>
                        <td>{item.tickets[0].phone}</td>
                        <td>{item.tickets[0].email}</td>
                        <td>{item.partition.name}</td>
                        <td>{item.partition.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </>
            )}
          </Table>
          <Button
            style={{ width: "100%" }}
            onClick={() => setdetails(!details)}
          >
            {`${!details ? "See All Tickets Details" : "Return Back"}`}
          </Button>
        </div>
      ) : (
        <div className="flex">
          <div className="loader1"></div>
        </div>
      )}
    </div>
  );
};

export default PartitionTickets;
