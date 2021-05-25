import { createServer, Model, Response } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
    let server = createServer({
        environment,

        models: {
            question: Model
        },

        seeds(server) {
            server.create("question", {
                "id": "1",
                "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore, sed diam voluptua.",
                "answers": [
                    {
                        "id": "1",
                        "text": "At vero eos et accusam et justo duo dolores et ea rebum"
                    },
                    {
                        "id": "2",
                        "text": "Stet clita kasd gubergren"
                    },
                    {
                        "id": "3",
                        "text": "Lorem ipsum dolor sit amet"
                    }
                ],
                "correctAnswer": "3"
            })
            server.create("question", {
                "id": "2",
                "text": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.",
                "answers": [
                    {
                        "id": "1",
                        "text": "At vero eos et accusam et justo duo dolores et ea rebum"
                    },
                    {
                        "id": "2",
                        "text": "Stet clita kasd gubergren"
                    },
                    {
                        "id": "3",
                        "text": "Lorem ipsum dolor sit amet"
                    }
                ],
                "correctAnswer": "2"
            })
            server.create("question", {
                "id": "3",
                "text": "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.",
                "answers": [
                    {
                        "id": "1",
                        "text": "Consetetur sadipscing elitr"
                    },
                    {
                        "id": "2",
                        "text": "Vel illum dolore eu feugiat nulla facilisis"
                    },
                    {
                        "id": "3",
                        "text": "Stet clita kasd gubergren, no sea takimata sanctus"
                    }
                ],
                "correctAnswer": "1"
            })
        },

        routes() {
            this.namespace = "api"

            this.get("/questions", (schema) => {
                return new Response(200, {}, schema.questions.all())
            })

            this.post("/questions/validation", (schema, request) => {
                let solutions = JSON.parse(request.requestBody)

                let correctAnswers = 0;
                for(let solution of solutions) {
                    let question = schema.questions.find(solution.questionId)
                    if(question.correctAnswer === solution.answer) {
                        correctAnswers++
                    }
                }
                let message = correctAnswers === 3 ? "Congratulations! You answered all questions correctly." : correctAnswers + " out of 3 questions answered correctly"
                return new Response(200, {}, {message: message})
            })
        },
    })

    return server
}