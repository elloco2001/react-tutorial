import React, { Component } from "react";

function Person({ person }) {
  return (
    <div>
      <h3>
        I am {person.name}. <br />I am {person.age} years old. <br />I know{" "}
        {person.skill}.
      </h3>
    </div>
  );
}

export default Person;
