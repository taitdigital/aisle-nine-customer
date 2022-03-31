import React from 'react'

export default function RecipeStep({ step }) {
  return (
    <div>
        <hr />        
        <h1>{step.name}</h1>
    </div>
  );
}