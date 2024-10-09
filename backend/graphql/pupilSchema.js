import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';
import { getPupils, addPupil, updatePupil, deletePupil } from '../controllers/pupilController.js';

const PupilType = new GraphQLObjectType({
    name: 'Pupil',
    fields: {
        pupils_id: { type: GraphQLInt },
        pupils_name: { type: GraphQLString },
        grades_id: { type: GraphQLInt },
        grades_name: { type: GraphQLString },
        all_subjects: { type: GraphQLString },
    }
});

// Define the Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        pupils: {
            type: new GraphQLList(PupilType),
            resolve: async () => {
                const pupils = await getPupils();
                return pupils;
            }
        }
    }
});

// Define Mutations
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addPupil: {
            type: PupilType,
            args: {
                name: { type: GraphQLString },
                grade_id: { type: GraphQLInt }
            },
            resolve: async (_, { name, grade_id }) => {
                await addPupil({ name, grade_id });
                return { name, grade_id };
            }
        },
        updatePupil: {
            type: PupilType,
            args: {
                pupils_id: { type: GraphQLInt },
                pupils_name: { type: GraphQLString },
                grades_id: { type: GraphQLInt }
            },
            resolve: async (_, { pupils_id, pupils_name, grades_id }) => {
                await updatePupil(pupils_id, { pupils_name, grades_id });
                return { pupils_id, pupils_name, grades_id };
            }
        },
        deletePupil: {
            type: PupilType,
            args: {
                pupils_id: { type: GraphQLInt }
            },
            resolve: async (_, { pupils_id }) => {
                await deletePupil(pupils_id);
                return { pupils_id };
            }
        }
    }
});

export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
