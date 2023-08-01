from celery import Celery


#app = Celery('python_celery', broker='amqps://jqdjczml:wVihh1Yey_UtdpuEdxC-Bjef2kcxhzRu@hummingbird.rmq.cloudamqp.com/jqdjczml',task_serializer='json')
app = Celery('python_celery', broker='amqp://guest:guest@localhost:5672/myvhost',task_serializer='json')



@app.task(serializer='json')
def asyncTask(*args, **kwargs):
    print("Recieved")
    print(args)
    print(kwargs)
    return