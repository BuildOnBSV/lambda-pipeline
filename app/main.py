import datetime

def handler(event, context):
    now = datetime.datetime.now().strftime('%Y-%m-%dT%H:%M:%S')
    print(now)
    print('hi')
    return now
