from fastapi import FastAPI

app = FastAPI(
    title="PathForge AI",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "PathForge AI Backend Running..."
    }