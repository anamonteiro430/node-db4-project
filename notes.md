# Notes

## A good data model

- captures ALL the information the system needs
- captures ONLY the information the system needs <--- Abstraction
- reflects reality (from the point of view of the system)
- is flexible, can evolve with the system
- guarantees data integrity, without sacrificing performance. <-- using constraints
- is driven by the way we access the data

## Components

- entities (nouns: zoo, animal, species), like a resource --> tables.
- properties --> columns or fields.
- relationships --> Foreign Keys

## Workflow

- identify entities
- identify properties
- identify relationships

## Relationships

- one to one: rare
- one to many: this is it!
- many to many: a trick!!

## Mantras

- every table must have a Primary Key
- one to many relationship requires a Foreign Key
- the Foreign Key goes on the Many side
- many to many needs a third table
- the third table can have other information
- work on two or three entities at at time
